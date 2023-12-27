import {
  DocumentData,
  FirestoreDataConverter,
  QueryDocumentSnapshot,
  SnapshotOptions,
} from "firebase/firestore";

export type RegisterCode = {
  id: string;
  messageBordId: string;
  expiredAt: string;
};

export const registerCoeConverter: FirestoreDataConverter<RegisterCode> = {
  toFirestore(regisretCode: RegisterCode): DocumentData {
    return {
      id: regisretCode.id,
      messageBordId: regisretCode.messageBordId,
      expiredAt: regisretCode.expiredAt,
    };
  },
  fromFirestore(
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions
  ): RegisterCode {
    const data = snapshot.data(options);
    return {
      id: snapshot.id,
      messageBordId: data.messageBordId,
      expiredAt: data.expiredAt,
    };
  },
};
