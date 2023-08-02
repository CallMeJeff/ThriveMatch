import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LikedService {
  [cardId: number]: any;
  private storageKey = 'likedCards';
  private likedCards: Set<number>;

  constructor() {
    const likedCardsStr = localStorage.getItem(this.storageKey);
    this.likedCards = new Set<number>(likedCardsStr ? JSON.parse(likedCardsStr) : []);
  }

  addLikedCards(cardId: number) {
    this.likedCards.add(cardId);
    this.updateLocalStorage();
  }

  removeLikedCards(cardId: number) {
    this.likedCards.delete(cardId);
    this.updateLocalStorage();
  }

  getLikedCards(): Set<number> {
    return this.likedCards;
  }

  private updateLocalStorage() {
    localStorage.setItem(this.storageKey, JSON.stringify(Array.from(this.likedCards)));
  }
}
