const library = [
  {
    title: "tuvi",
    author: "tuvi",
    status: {
      own: true,
      reading: true,
      read: false,
    },
  },
  {
    title: "tuvi tuvi",
    author: "tuvi tuvi",
    status: {
      own: true,
      reading: true,
      read: false,
    },
  },
  {
    title: "tuvi tuvi tuvi",
    author: "tuvi tuvi tuvi",
    status: {
      own: true,
      reading: true,
      read: false,
    },
  },
];

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

const { title: firstBook } = library[0];

JSON.stringify(library);
