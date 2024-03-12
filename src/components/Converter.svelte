<script lang="ts">
  import { allConversionMaps, type ConversionMap } from "@/scripts/maps";

  // State
  let boringText = "";
  let showAlphabetSampleText = false;

  // Sample text
  const exampleText = "Sample Text";
  const exampleTextFull = "ABCDEFGHIJKLMNOPQRSTUVWXYZ | abcdefghijklmnopqrstuvwxyz";
  const exampleNumbers = "0123456789";

  // Mappings
  const textConversion: ConversionMap[] = allConversionMaps.text;
  const numberConversion: ConversionMap[] = allConversionMaps.numbers;

  // Funciton to apply a mapping over a string
  function mapText(inputText: string, map: ConversionMap): string {
    return inputText
      .split("")
      .map((char) => {
        return map.map[char] ?? char; // Convert if possible or pass through
      })
      .join("");
  }
</script>

<label>
  Boring Text:
  <input bind:value={boringText} placeholder="Boring text here..." />
</label>
<label>
  <input type="checkbox" disabled={boringText.trim() !== ""} bind:checked={showAlphabetSampleText} />
  Full alphabet sample text
</label>
<hr />
<p>Text maps:</p>
<dl>
  {#each textConversion as map}
    <dt>{map.title} <em>({Object.keys(map.map).length} maps)</em></dt>
    <dd>{mapText(boringText.trim() || (showAlphabetSampleText ? exampleTextFull : exampleText), map)}</dd>
  {/each}
</dl>
<p>Number maps:</p>
<dl>
  {#each numberConversion as map}
    <dt>{map.title} <em>({Object.keys(map.map).length} maps)</em></dt>
    <dd>{mapText(boringText.trim() || exampleNumbers, map)}</dd>
  {/each}
</dl>

<style>
  /* Fix description lists */
  dt {
    color: var(--pico-secondary);
    font-size: 0.8em;
  }

  dd + dt {
    margin-top: 0.5rem;
  }

  dd {
    margin-inline-start: 0;
    border: var(--pico-border-width) solid var(--pico-form-element-border-color);
    background-color: var(--pico-form-element-background-color);
    padding: 0.1rem 0.5rem;
  }
</style>
