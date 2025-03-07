// src/lib/stores/cart.js
import { writable } from 'svelte/store';
import { browser } from '$app/environment';

// use localStorage only in browser
const initialCart = browser ? JSON.parse(localStorage.getItem('cart')) || [] : [];
export const cart = writable(initialCart);

// sync cart to localStorage
if (browser) {
  cart.subscribe((value) => {
    localStorage.setItem('cart', JSON.stringify(value));
  });
}