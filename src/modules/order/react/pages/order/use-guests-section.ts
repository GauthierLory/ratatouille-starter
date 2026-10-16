// presenter, c'est un hook
// connexion avec le monde interne et le monde externe (react)
// c'est une interface

import { useState } from "react";

 type Guest = {
    id: string;
    firstName: string;
    lastName: string;
    age: number;
 }

export const useGuestsSection = () => {
function addGuest() {
    setGuests((guests) => [
        ...guests,
        {
            id: Math.random().toString(),
            firstName: "John",
            lastName: "Doe",
            age: 30
        }
    ])
}

function removeGuest(id : string) {
    setGuests((guests) => guests.filter((guest) => guest.id !== id))
}

function updateGuest(id: string, key: string, value: any) {}

function changeOrganizer() {}

function onNext() {}

function isSubmittable() {
    return false
}

const [guests, setGuests] = useState<Guest[]>([])
// const guests: any = []

return {
    addGuest,
    removeGuest,
    updateGuest,
    changeOrganizer,
    onNext,
    isSubmittable,
    guests
};

}