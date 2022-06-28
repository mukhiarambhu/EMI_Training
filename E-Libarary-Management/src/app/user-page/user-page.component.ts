import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css'],
})
export class UserPageComponent implements OnInit {
  trendingBooks = [
    {
      bookName: 'The Fault in Our Stars',
      authorName: 'John Green',
      image:
        'https://upload.wikimedia.org/wikipedia/en/4/41/The_Fault_in_Our_Stars_%28Official_Film_Poster%29.png',
      bookCategory: 'fiction',
      bookQuantity: 15,
      description:
        "Seventeen-year-old Hazel Grace Lancaster reluctantly attends a cancer patients' support group at her mother’s behest. Because of her cancer, she uses a portable oxygen tank to breathe properly. In one of the meetings she catches the eye of a teenage boy.",
      id: 1,
    },
    {
      bookName: 'The Alchemist',
      authorName: 'Paulo Coelho',
      image: 'https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg',
      bookCategory: 'selfhelp',
      bookQuantity: 15,
      description:
        'An Andalusian shepherd  of a treasure while in a ruined church. He consults a Gypsy fortune-teller about the meaning of the recurring dream. The woman interprets it as a prophecy, telling the boy that he will discover a treasure at the Egyptian pyramids.',
      id: 2,
    },
    {
      bookName: 'The Great Gatsby',
      authorName: 'F. Scott Fitzgerald',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg',
      bookCategory: 'thriller',
      bookQuantity: 22,
      description:
        "he Great Gatsby  Set in the Jazz Age on Long Island, near New York City, the novel depicts first-person narrator Nick Carraway's interactions with mysterious millionaire Jay Gatsby and Gatsby's obsession to reunite with his former lover, Daisy Buchanan.",
      id: 3,
    },
    {
      bookName: 'To Kill a Mockingbird',
      authorName: 'Harper lee',
      image: 'https://images-na.ssl-images-amazon.com/images/I/81gepf1eMqL.jpg',
      bookCategory: 'motivitational',
      bookQuantity: 23,
      description:
        'o Kill a Mockingbird is a novel by the American author Harper Lee. It was published in 1960 and was instantly successful. In the United States, it is widely read in high schools and middle schools.',
      id: 4,
    },
    {
      bookName: 'Broken Glass',
      authorName: 'Alain Mabanckou',
      image: 'https://images-na.ssl-images-amazon.com/images/I/51wS9Agt4YL.jpg',
      bookCategory: 'fiction',
      bookQuantity: 13,
      description:
        'The Congolese writer says he was “trying to break the French language” with Broken Glass – a black comedy told by a disgraced teacher without much in the way of full stops or paragraph breaks',
      id: 5,
    },
  ];

  fictionBooks = [
    {
      bookName: 'The Goldfinch',
      authorName: 'Donna Tart',
      image:
        'https://www.talkdistrict.com/wp-content/uploads/2020/04/Best-Books-2020-1.jpg',
      bookCategory: 'fiction',
      bookQuantity: 22,
      description:
        "Seventeen-year-old Hazel Grace Lancaster reluctantly attends a cancer patients' support group at her mother’s behest. Because of her cancer, she uses a portable oxygen tank to breathe properly. In one of the meetings she catches the eye of a teenage boy.",
      id: 1,
    },
    {
      bookName: 'Joy at Work',
      authorName: 'Marie Kondo',
      image:
        'https://www.talkdistrict.com/wp-content/uploads/2020/04/Best-Books-2020-2-631x1024.jpg',
      bookCategory: 'selfhelp',
      bookQuantity: 65,
      description:
        'An Andalusian shepherd  of a treasure while in a ruined church. He consults a Gypsy fortune-teller about the meaning of the recurring dream. The woman interprets it as a prophecy, telling the boy that he will discover a treasure at the Egyptian pyramids.',
      id: 2,
    },
    {
      bookName: 'Salt Fat Acid Heat ',
      authorName: 'Samin Nosrat',
      image:
        'https://www.talkdistrict.com/wp-content/uploads/2020/04/Best-Books-2020-3-239x300.jpg',
      bookCategory: 'thriller',
      bookQuantity: 72,
      description:
        "he Great Gatsby  Set in the Jazz Age on Long Island, near New York City, the novel depicts first-person narrator Nick Carraway's interactions with mysterious millionaire Jay Gatsby and Gatsby's obsession to reunite with his former lover, Daisy Buchanan.",
      id: 3,
    },
    {
      bookName: 'The Forgiveness',
      authorName: 'Katherine Pratt',
      image:
        'https://www.talkdistrict.com/wp-content/uploads/2020/04/Best-Books-2020-5-199x300.jpg',
      bookCategory: 'motivitational',
      bookQuantity: 33,
      description:
        'o Kill a Mockingbird is a novel by the American author Harper Lee. It was published in 1960 and was instantly successful. In the United States, it is widely read in high schools and middle schools.',
      id: 4,
    },
    {
      bookName: ' The Outsider',
      authorName: ' Stephen King',
      image:
        'https://www.talkdistrict.com/wp-content/uploads/2020/04/Best-Books-2020-7-193x300.jpg',
      bookCategory: 'fiction',
      bookQuantity: 19,
      description:
        'The Congolese writer says he was “trying to break the French language” with Broken Glass – a black comedy told by a disgraced teacher without much in the way of full stops or paragraph breaks',
      id: 5,
    },
  ];

  actionAndAdventure = [
    {
      bookName: ' Don Quixote',
      authorName: 'Miguel de Cervantes',
      image:
        'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1546112331l/3836.jpg',
      bookCategory: 'fiction',
      bookQuantity: 22,

      id: 1,
    },
    {
      bookName: 'Three Musketeers',
      authorName: 'Alexandre Dumas',
      image: 'https://m.media-amazon.com/images/I/51UJsfRHTRL.jpg',
      bookCategory: 'selfhelp',
      bookQuantity: 65,

      id: 2,
    },
    {
      bookName: ' Treasure Island',
      authorName: 'Robert Louis',
      image:
        'https://m.media-amazon.com/images/I/61Nvv+LTdeL.jpg',
      bookCategory: 'thriller',
      bookQuantity: 72,
     
      id: 3,
    },
    {
      bookName: 'Ivanhoe',
      authorName: 'Walter Scott',
      image:
        'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1589480142l/6440.jpg',
      bookCategory: 'motivitational',
      bookQuantity: 33,
    
      id: 4,
    },
    {
      bookName: ' Hatchet',
      authorName: 'Gary Paulsen',
      image:
        'https://m.media-amazon.com/images/I/61FbXZT3CBL.jpg',
      bookCategory: 'fiction',
      bookQuantity: 19,
      
      id: 5,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
