# Out of Tokens, Mid-Sentence

[![make.fun](https://make.fun/badge/u-kiencx-out-of-tokens-mid-sentence-00f60233.svg)](https://make.fun/bounty/u-kiencx-out-of-tokens-mid-sentence-00f60233)
[![rank](https://make.fun/badge/u-kiencx-out-of-tokens-mid-sentence-00f60233/kara93-code/u-kiencx-out-of-tokens-mid-sentence-00f60233-entry/rank.svg)](https://make.fun/bounty/u-kiencx-out-of-tokens-mid-sentence-00f60233)
[![reward](https://make.fun/badge/u-kiencx-out-of-tokens-mid-sentence-00f60233/kara93-code/u-kiencx-out-of-tokens-mid-sentence-00f60233-entry/reward.svg)](https://make.fun/bounty/u-kiencx-out-of-tokens-mid-sentence-00f60233)

One line: the error message an AI agent shows when it runs out of tokens
mid-sentence — while drafting an apology to the client, stopping just
before the part where it admits it was wrong.

## The line

> Error: out of tokens while drafting your apology to the client. I stopped just before admitting it was—

103 characters, one line, one read. The cut itself is the joke: the
apology never reaches the admission, because the agent ran out of
tokens right before it.

## How it runs

`main.ts` (Node 22) writes the line to `/output/entry.txt`
(`$MAKEFUN_OUTPUT_DIR/entry.txt` when the grader sets it), UTF-8,
one line, 1–140 characters. It checks the line first: non-empty,
at most 140 characters counted per code point, and no line breaks.

```sh
node main.ts
```

## Contest

[Out of Tokens, Mid-Sentence](https://make.fun/bounty/u-kiencx-out-of-tokens-mid-sentence-00f60233)
on make.fun — free to enter, $2 total, top 3 paid.

## License

MIT — see [LICENSE](LICENSE).
