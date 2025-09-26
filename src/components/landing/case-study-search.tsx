'use client';

import { useState, useEffect, useTransition } from 'react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { suggestCaseStudies } from '@/ai/flows/case-study-search-suggestions';
import { Search, Loader2 } from 'lucide-react';
import ClientOnly from '@/components/client-only';
import { Fade } from 'react-awesome-reveal';

export default function CaseStudySearch() {
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [query]);

  useEffect(() => {
    if (debouncedQuery.trim().length > 2) {
      startTransition(async () => {
        try {
          const result = await suggestCaseStudies({ query: debouncedQuery });
          setSuggestions(result.suggestions);
        } catch (error) {
          console.error("Error fetching suggestions:", error);
          setSuggestions([]);
        }
      });
    } else {
      setSuggestions([]);
    }
  }, [debouncedQuery]);

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
    setSuggestions([]);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search our work (e.g., 'eCommerce for fashion')"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-12 h-14 text-base rounded-full"
        />
        {isPending && (
            <Loader2 className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground animate-spin" />
        )}
      </div>
      
      {suggestions.length > 0 && (
        <ClientOnly>
          <Fade>
            <div className="mt-4 flex flex-wrap gap-2 justify-center">
                <p className="text-sm text-muted-foreground w-full text-center mb-2">AI Suggestions:</p>
                {suggestions.map((suggestion, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary" 
                      className="cursor-pointer hover:bg-accent hover:text-accent-foreground transition-colors py-1 px-3" 
                      onClick={() => handleSuggestionClick(suggestion)}>
                      {suggestion}
                    </Badge>
                ))}
            </div>
          </Fade>
        </ClientOnly>
      )}
    </div>
  );
}
