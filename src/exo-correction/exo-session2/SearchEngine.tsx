import React, { ChangeEvent, ReactElement, useState } from 'react'

const names = [
  'john',
  'jack',
  'jane',
  'jule',
  'jenny',
  'eric',
  'jessy',
  'marie',
  'michel',
  'fanie',
  'dimitri',
  'damien',
  'dorian',
]

export default function SearchEngine(): ReactElement {
  const [result, setResult] = useState<string[]>([])

  const onSearch = (event: ChangeEvent<HTMLInputElement>): void => {
    // 1. Récupérer ce que l'utilisateur à remplie
    const search = event.target.value

    // 2. On vérifie si l'utilisateut à au moins rentré
    // 2 lettres
    if (search.length < 2) {
      setResult([])
      return
    }

    // 3. On filtres la liste des noms avec ce que l'utilisateur
    // viens de rentrer
    setResult(names.filter(name => name.includes(search)))
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Rechercher des noms ..."
        onChange={onSearch}
      />
      <ul>
        {result.map(name => (
          <li>{name}</li>
        ))}
      </ul>
    </div>
  )
}
