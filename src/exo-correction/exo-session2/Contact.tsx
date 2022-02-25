import React, { ChangeEvent, ReactElement, useState } from 'react'

type Contact = {
  nom: string
  phone: string
}

export default function Contact(): ReactElement {
  const [newContact, setNewContact] = useState<Contact>({
    nom: '',
    phone: '+33',
  })
  const [contactList, setContactList] = useState<Contact[]>([])

  const changeContactName = (event: ChangeEvent<HTMLInputElement>): void => {
    setNewContact({
      ...newContact,
      nom: event.target.value,
    })
  }

  const changeContactPhone = (event: ChangeEvent<HTMLInputElement>): void => {
    setNewContact({
      ...newContact,
      phone: event.target.value,
    })
  }

  const ajouterContact = (): void => {
    setContactList([...contactList, newContact])
    setNewContact({
      nom: '',
      phone: '',
    })
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Nom du contact ..."
        value={newContact.nom}
        onChange={changeContactName}
      />
      <input
        type="text"
        placeholder="Numéro de téléphone"
        value={newContact.phone}
        onChange={changeContactPhone}
      />
      <button onClick={ajouterContact}>Valider</button>

      {contactList.map(contact => (
        <p>
          {contact.nom}: {contact.phone}
        </p>
      ))}
    </div>
  )
}
