import { Injectable } from '@angular/core';
import { Post } from './post';
import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import firebase from 'firebase';

@Injectable({
  providedIn: 'root',
})
export class PostBlogService {
  post: Observable<any>;
  private postCollection: AngularFirestoreCollection<any>;

  constructor(private db: AngularFirestore) {
    this.postCollection = db.collection('blog', (ref) =>
      ref.orderBy('_ts', 'desc')
    );
    this.post = this.postCollection.valueChanges();
  }

  postBlog(post) {
    const postRef: AngularFirestoreDocument<any> = this.db.doc(
      `blog/${post.uid}`
    );
    const poastData: Post = {
      uid: post.uid,
      title: post.title,
      description: post.description,
      edit: false,
      _ts: firebase.firestore.Timestamp.fromDate(new Date()),
    };
    return postRef.set(poastData, {
      merge: true,
    });
  }

  updatePost(post) {
    const postRef: AngularFirestoreDocument<any> = this.db.doc(
      `blog/${post.uid}`
    );
    const poastData: Post = {
      uid: post.uid,
      title: post.title,
      description: post.description,
      edit: true,
      _ts: firebase.firestore.Timestamp.fromDate(new Date()),
    };
    return postRef.set(poastData, {
      merge: true,
    });
  }

  getPostbyUid(uid): Promise<any> {
    return new Promise((resolve, reject) => {
      this.db
        .collection('blog')
        .doc(uid)
        .ref.get()
        .then(function (doc) {
          if (doc.exists) {
            resolve(doc.data());
          } else {
            reject('No existe el documento!');
          }
        })
        .catch(function (error) {
          reject('Ha ocurrido un error!');
        });
    });
  }
}
