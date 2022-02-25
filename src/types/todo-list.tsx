/**
 * Représente un tache à faire
 */
export type Todo = {
  /**
   * Contient l'identifiant unique de notre tache
   */
  id: string

  /**
   * Contient le libelé de la tache
   */
  label: string

  /**
   * Est-ce que la tache est terminé ou non
   */
  checked: boolean
}

/**
 * Contient la liste de nos taches
 */
export type TodoList = Todo[]

/**
 * Créer un todo
 */
export function createTodo(
  id?: string,
  label?: string,
  checked?: boolean,
): Todo {
  return {
    id: id ?? '1',
    label: label ?? '',
    checked: checked ?? false,
  }
}
