import { Client } from "./AddClientModal";
import { Team } from "./AddTeamModal";

export const clients: Client[] = [
    {
      id: 0,
      name: 'Jayasin',
      bio: 'Team Manager',
      // avatar: '../../assets/dummy_avatar.png',
      dateOfCreation: "03/08/09"
    },
    {
      id: 1,
      name: 'Pravin',
      bio: 'Manages Developer Team',
      // avatar: '/assets/avatar_male.png',
      dateOfCreation: "03/08/09"
    },
    {
      id: 2,
      name: 'Parth',
      bio: 'Team Senior Backend Manager',
      // avatar: '/assets/avatar_male.png',
      dateOfCreation: "03/08/09"
    }
  ];
  
export const teams: Team[] = [
    {
      id: 0,
      name: 'Software Developers',
      description: 'Software Development team Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, quam!',
      creationDate: "03/08/09",
      dueDate: "03/08/09"
    },
    {
      id: 1,
      name: 'Software Developers',
      description: 'Software Development team Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, quam!',
      creationDate: "03/08/09",
      dueDate: "03/08/09",
    },
    {
      id: 2,
      name: 'Software Developers',
      description: 'Software Development team Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, quam!',
      creationDate: "03/08/09",
      dueDate: "03/08/09",
    },
    
  ];