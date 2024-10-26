/*
  Model: Portfolio
  Fields:
    id: number
    user: {
      name: string,
      lastName: string,
      email: string,
      age: number,
      role?: string
    },
    name: string,
    status: enum (draft, published, archived) -> default draft,
    url: string,
    active: boolean -> default true,
    noVisits: number -> default 0,
    createdAt: Date,
    updatedAt: Date    
*/

const porftolioMartin = {
  id: 1,
  user: {
    name: 'Martin',
    lastName: 'Melo Godínez',
    email: 'martinmelo@actosoft.com.mx',
    age: 27,
    role: 'Senior Full Stack Developer',
  },
  name: 'My first portfolio v1',
  status: 'draft',
  url: 'https://martinmelo.dev/portfolio',
  active: true,
  noVisits: 2,
  createdAt: new Date('2024-10-19T08:00:00'),
  updatedAt: new Date('2024-10-19T08:00:00'),
}

module.exports = [
  porftolioMartin,
]