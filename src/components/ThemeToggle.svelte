<script lang="ts">
  import { onMount } from "svelte";
  type ThemeMode = "dark" | "light" | null;

  let theme: ThemeMode;

  onMount(() => {
    theme = window.localStorage.getItem("theme") as ThemeMode;
    if (theme === null) return;
    setTheme(theme);
  });

  function handleClick() {
    theme = getTheme();
    if (theme === null) {
      console.log("No theme. Setting to Dark");
      setTheme("dark");
      return;
    }
    theme === "light" ? setTheme("dark") : setTheme("light");
  }

  function getTheme(): ThemeMode {
    return document.documentElement.getAttribute("data-theme") as ThemeMode;
  }

  function setTheme(mode: ThemeMode) {
    if (mode === null) return;
    document.documentElement.setAttribute("data-theme", mode);
    window.localStorage.setItem("theme", mode);
  }
</script>

<button class="contrast outline" on:click={handleClick}>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="sun"
    ><circle cx="12" cy="12" r="4" /><path d="M12 4h.01" /><path d="M20 12h.01" /><path d="M12 20h.01" /><path
      d="M4 12h.01"
    /><path d="M17.657 6.343h.01" /><path d="M17.657 17.657h.01" /><path d="M6.343 17.657h.01" /><path
      d="M6.343 6.343h.01"
    /></svg
  >
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="moon"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" /></svg
  >
</button>

<style>
  button {
    font-size: 10px;
    padding: 0.5rem;
    display: grid;
    overflow: clip;
  }

  .sun,
  .moon {
    grid-row-start: 1;
    grid-column-start: 1;

    color: var(--pico-contrast);

    transition:
      color var(--pico-transition),
      translate var(--pico-transition);
  }
  .sun {
    translate: 0 0;
  }
  .moon {
    translate: 0 -150%;
  }

  :global(html[data-theme="dark"]) {
    & .sun {
      translate: 0 150%;
    }
    & .moon {
      translate: 0 0;
    }
  }
</style>
