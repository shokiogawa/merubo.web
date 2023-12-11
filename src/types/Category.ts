import {
  DocumentData,
  FirestoreDataConverter,
  QueryDocumentSnapshot,
  SnapshotOptions,
} from "firebase/firestore";

export type Category = {
  id: string;
  name: string;
  nameJp: string;
};

//コンバーター
export const categoryConverter: FirestoreDataConverter<Category> = {
  toFirestore(category: Category): DocumentData {
    return {
      id: category.id,
      name: category.name,
      nameJp: category.nameJp,
    };
  },
  fromFirestore(
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions
  ): Category {
    const data = snapshot.data(options);
    return {
      id: snapshot.id,
      name: data.name,
      nameJp: data.nameJp,
    };
  },
};
