# Topic Map Regression Test

## Edexcel IGCSE Biology 4BI1

Open `/app/topics/biology` with a user whose profile has:

- qualification: `IGCSE`
- examBoard: `edexcel-igcse`
- subject: `biology`

Expected:

- The page shows Edexcel IGCSE Biology 4BI1 topic cards only.
- The page does not show `B1 Cell level systems`, `B2 Scaling up`, or `B3 Organism level systems`.
- The page does not show AQA top-level cards such as `Cell biology` or `Infection and response`.
- Cards with custom/generated question-bank entries show `20 questions` and can be opened for practice.
- General practice UI says `questions`, not `licensed past-paper questions`.

Checked manually in the in-app browser after the fix.

## All Subjects

Open any `/app/topics/:subject` page after changing exam board/profile.

Expected:

- The topic cards are driven by the selected syllabus/paper topic ids first.
- Board-specific topic maps, such as Edexcel Biology and Edexcel Chemistry, do not show generic or other-board fallback cards.
- Mixed papers use the union of the selected board's configured papers, not every shared topic for that subject.
- Cards still count all usable questions from generated/custom/licensed banks.

## OxfordAQA Chemistry 9202

With a user profile set to:

- qualification: `IGCSE`
- examBoard: `oxfordaqa-igcse`
- subject: `chemistry`

Expected topic cards:

- Atomic structure and the periodic table
- Structure, bonding and the properties of matter
- Chemical changes
- Chemical analysis
- Acids, bases and salts
- Quantitative chemistry
- Periodicity
- The rate and extent of chemical change
- Energy changes
- Organic chemistry

The OxfordAQA Chemistry bank should contain `280` mapped questions and no generic Edexcel-only topic cards.
