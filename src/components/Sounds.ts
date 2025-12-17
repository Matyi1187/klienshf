/**
 * Plays a delete sound effect when a recipe is deleted.
 */
export const playDeleteSound = () => {
  const audio = new Audio("/sounds/delete.mp3");
  audio.play();
};

/**
 * Plays a favourite sound effect when a recipe is marked as favourite.
 */
export const playFavouriteSound = () => {
  const audio = new Audio("/sounds/favourite.mp3");
  audio.play();
};

/**
 * Plays an add sound effect when a recipe is added.
 */
export const playAddSound = () => {
  const audio = new Audio("/sounds/confirm.mp3");
  audio.play();
}