import { Request, Response } from "express";
import { Book } from "../models/bookModel";
import { UserRole } from "../models/userModel";

export const createBooks = async (req: Request, res: Response) => {
  try {
    const { title, description, userId } = req.body;

    const book = await new Book({
      title,
      description,
      createdBy: userId,
      createdAt: new Date(),
    });

    book.save();

    res.status(201).json({ message: "Book created", book: book });
  } catch (error) {
    console.error("Failed to create book:", error);
    res.status(500).json({ message: "Failed to create book" });
  }
};

export const viewBooks = async (req: Request, res: Response) => {
  try {
    const { roles , userId } = req.body;
    if(roles.includes(UserRole.VIEW_ALL)){
        let query :any = {}
        const {old , new : newBooks } = req.query;
        if (old) {
            const tenMinutesAgo = new Date(Date.now() - 10 * 60 * 1000);
            query = { ...query, createdAt: { $lte: tenMinutesAgo } };
          } else if (newBooks) {
            const tenMinutesAgo = new Date(Date.now() - 10 * 60 * 1000);
            query = { ...query, createdAt: { $gt: tenMinutesAgo } };
          }

          const books = await Book.find(query);
          return res.json({ books });
    }

    if(roles.includes(UserRole.VIEWER)){
        let query:any = { createdBy : userId}

        const { old, new: newBooks } = req.query;

      // Apply filters based on the query parameters
      if (old) {
        const tenMinutesAgo = new Date(Date.now() - 10 * 60 * 1000);
        let createdAt :any= { $lte: tenMinutesAgo }
        query = { ...query, createdAt: { $lte: tenMinutesAgo.toISOString() }  };
      } else if (newBooks) {
        const tenMinutesAgo = new Date(Date.now() - 10 * 60 * 1000);
        query = { ...query, createdAt : { $gt: tenMinutesAgo.toISOString() } };
      }

      const books = await Book.find(query);
      return res.json({ books });
    }


    res.json({ books: [] });
  } catch (error) {
    console.error('Failed to get books:', error);
    res.status(500).json({ message: 'Failed to get books' });
  }
};
