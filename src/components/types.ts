/**
 * View modes for displaying recipes.
 */
export type ViewMode = "scroll" | "arrow";

/**
 * Type definition for the props of the EditRecipe component.
 */
export type EditRecipesProps = {
  open: boolean;
  recipe: Recipe | null;
  onClose: () => void;
  onSave: (updated: Recipe) => void;
};

/**
 * Type definition for a Recipe object.
 * A recipe consists of a name, ingredients, instructions, and an optional favourite status.
 */
export type Recipe = {
  name: string;
  ingredients: string;
  instructions: string;
  favourite?: boolean;
}

/**
 * Type definition for the props of the ArrowView component.
 */
export type ArrowViewProps = {
    recipes: Recipe[];
    onEdit: (index: number) => void;
    onDelete: (index: number) => void;
    onToggleFavourite: (index: number) => void;
};

/**
 * Type definition for the props of the ChooseView component.
 */
export type ChooseViewProps = {
  viewMode: ViewMode;
  onChange: (mode: ViewMode) => void;
};

/**
 * Type definition for the props of the Header component.
 */
export type HeaderProps = {
  value: number;
  onChange: (event: any, newValue: number) => void;
}

/**
 * Type definition for the props of the RecipeCard component.
 */
export type RecipeCardProps = {
  recipe: Recipe;
  index: number;
  handleEdit: (index: number) => void;
  handleDelete: (index: number) => void;
  toggleFavourite: (index: number) => void;
  mode?: "arrow" | "scroll";
  showButtons?: boolean;
};

/**
 * Type definition for the props of the SearchTab component.
 */
export type SearchTabProps = {
    recipes: Recipe[];
};