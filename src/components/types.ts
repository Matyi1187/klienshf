export type ViewMode = "scroll" | "arrow";

export type EditRecipesProps = {
  open: boolean;
  recipe: Recipe | null;
  onClose: () => void;
  onSave: (updated: Recipe) => void;
};

export type Recipe = {
  name: string;
  ingredients: string;
  instructions: string;
  favourite?: boolean;
}

export type ArrowViewProps = {
    recipes: Recipe[];
    onEdit: (index: number) => void;
    onDelete: (index: number) => void;
    onToggleFavourite: (index: number) => void;
};