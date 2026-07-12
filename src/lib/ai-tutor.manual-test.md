# AI Tutor Manual Tests

## Test 1: Greeting

- Input: `Hello`
- Expected: `Hey! What subject or question do you want help with today?`
- Fail condition: Any Biology, ecology, Cambridge Paper 1, MCQ, or weak-topic response.

## Test 2: Chemistry Topic

- Input: `Help me with electrolysis`
- Expected: Chemistry electrolysis help.
- Fail condition: Biology content.

## Test 3: Biology Topic

- Input: `Give me ecology MCQs`
- Expected: Biology ecology MCQs.
- Fail condition: Chemistry or unrelated content.

## Test 4: Marking Without Context

- Input: `mark my answer`
- Expected: Ask for the question, mark scheme or marks, subject, and the user's answer.
- Fail condition: Assumes Biology or starts marking without enough context.
