import {
  DocumentData,
  FirestoreDataConverter,
  QueryDocumentSnapshot,
  SnapshotOptions,
} from "firebase/firestore";

export type Message = {
  id: string;
  userName: string;
  thumbnail: string | undefined;
  image: string | undefined;
  content: string;
  orderNumber: number;
  createdAt: Date;
  updatedAt: Date;
};

//コンバーター
export const messageConverter: FirestoreDataConverter<Message> = {
  toFirestore(message: Message): DocumentData {
    return {
      id: message.id,
      userName: message.userName,
      thumbnail: message.thumbnail,
      image: message.image,
      content: message.content,
      orderNumber: message.orderNumber,
      createdAt: message.createdAt,
      updatedAt: message.updatedAt,
    };
  },
  fromFirestore(
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions
  ): Message {
    const data = snapshot.data(options);
    return {
      id: snapshot.id,
      userName: data.userName,
      thumbnail: data.thumbnail,
      image: data.image,
      content: data.content,
      orderNumber: data.orderNumber,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
    };
  },
};
