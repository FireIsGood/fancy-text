<script lang="ts">
  import { allConversionMaps, type ConversionMap } from "@/scripts/maps";

  let boringText = "";
  const exampleText = "Sample Text | ABCDEFGHIJKLMNOPQRSTUVWXYZ | abcdefghijklmnopqrstuvwxyz";
  const exampleNumbers = "0123456789";

  const textConversion: ConversionMap[] = allConversionMaps.text;
  const numberConversion: ConversionMap[] = allConversionMaps.numbers;

  function mapText(inputText: string, map: ConversionMap): string {
    const outputText: string = inputText
      .split("")
      .map((char) => {
        return map.map[char] ?? char; // Convert if possible or pass through
      })
      .join("");

    return outputText;
  }
</script>

<label>
  Boring Text:
  <input bind:value={boringText} placeholder="Boring text here..." />
</label>
<hr />
<p>Text maps:</p>
<p></p>
<dl>
  {#each textConversion as map}
    <dt>{map.title} <em>({Object.keys(map.map).length} maps)</em></dt>
    <dd>{mapText(boringText || exampleText, map)}</dd>
  {/each}
</dl>
<p>Number maps:</p>
<dl>
  {#each numberConversion as map}
    <dt>{map.title} <em>({Object.keys(map.map).length} maps)</em></dt>
    <dd>{mapText(boringText || exampleNumbers, map)}</dd>
  {/each}
</dl>
