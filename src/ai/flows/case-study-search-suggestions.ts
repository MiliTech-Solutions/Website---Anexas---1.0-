'use server';
/**
 * @fileOverview Provides case study suggestions based on a search query.
 *
 * - suggestCaseStudies - A function that takes a search query and returns relevant case studies.
 * - SuggestCaseStudiesInput - The input type for the suggestCaseStudies function.
 * - SuggestCaseStudiesOutput - The return type for the suggestCaseStudies function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestCaseStudiesInputSchema = z.object({
  query: z.string().describe('The search query entered by the user.'),
});
export type SuggestCaseStudiesInput = z.infer<typeof SuggestCaseStudiesInputSchema>;

const SuggestCaseStudiesOutputSchema = z.object({
  suggestions: z.array(
    z.string().describe('A list of relevant case study suggestions.')
  ).describe('The list of case study suggestions based on the search query.'),
});
export type SuggestCaseStudiesOutput = z.infer<typeof SuggestCaseStudiesOutputSchema>;

export async function suggestCaseStudies(input: SuggestCaseStudiesInput): Promise<SuggestCaseStudiesOutput> {
  return suggestCaseStudiesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestCaseStudiesPrompt',
  input: {schema: SuggestCaseStudiesInputSchema},
  output: {schema: SuggestCaseStudiesOutputSchema},
  prompt: `You are an AI assistant helping a digital agency suggest relevant case studies to potential clients based on their search query.

  Given the following search query, suggest a list of relevant case studies that the agency has previously done:

  Search Query: {{{query}}}

  Provide a list of case study suggestions that match the search query. The suggestions should be tailored to the query and highlight the agency's relevant experience.
  Format the output as a JSON array of strings.`, 
});

const suggestCaseStudiesFlow = ai.defineFlow(
  {
    name: 'suggestCaseStudiesFlow',
    inputSchema: SuggestCaseStudiesInputSchema,
    outputSchema: SuggestCaseStudiesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
