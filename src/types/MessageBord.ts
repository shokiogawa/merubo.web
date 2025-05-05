import {
  DocumentData,
  FirestoreDataConverter,
  QueryDocumentSnapshot,
  SnapshotOptions,
} from "firebase/firestore";

export type MessageBord = {
  id: string;
  receiverUserName: string;
  lastMessage: string;
  title: string;
  ownerUserName: string;
  categoryEnum: string;
  category: string;
  templateImageUrl?: string | undefined;
  animationUrl: string;
  isAnimationLoop: boolean;
  status: string;
  mainMessage: string;
  mainMessageColor: string;
  mainMessageSize: number;
};

// コンバーター
export const messageBordConverter: FirestoreDataConverter<MessageBord> = {
  toFirestore(messageBord: MessageBord): DocumentData {
    return {
      id: messageBord.id,
      receiverUserName: messageBord.receiverUserName,
      lastMessage: messageBord.lastMessage,
      title: messageBord.title,
      ownerUserName: messageBord.ownerUserName,
      categoryEnum: messageBord.categoryEnum,
      category: messageBord.category,
      templateImageUrl: messageBord.templateImageUrl,
      status: messageBord.status,
      mainMessage: messageBord.mainMessage,
      mainMessageColor: messageBord.mainMessageColor,
      mainMessageSize: Number(messageBord.mainMessageSize),
      animationUrl: messageBord.animationUrl,
      isAnimationLoop: messageBord.isAnimationLoop,
    };
  },
  fromFirestore(
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions
  ): MessageBord {
    const data = snapshot.data(options);
    return {
      id: snapshot.id,
      receiverUserName: data.receiverUserName,
      lastMessage: data.lastMessage,
      title: data.title,
      ownerUserName: data.ownerUserName,
      categoryEnum: data.categoryEnum,
      category: data.category,
      templateImageUrl: data.templateImageUrl,
      status: data.status,
      mainMessage: data.mainMessage,
      mainMessageColor: data.mainMessageColor,
      mainMessageSize: data.mainMessageSize,
      animationUrl: data.animationUrl,
      isAnimationLoop: data.isAnimationLoop,
    };
  },
};
