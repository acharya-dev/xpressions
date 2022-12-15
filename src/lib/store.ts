import { writable, type Writable } from "svelte/store";

export const activePage: Writable<string | null> = writable(null);