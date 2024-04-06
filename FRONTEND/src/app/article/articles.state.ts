import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Article } from './article.model';

// Actions
export class AddArticle {
  static readonly type = '[Article] Add';
  constructor(public payload: Article) {}
}

export class GetArticles {
  static readonly type = '[Article] Get';
}

// State Model
export interface ArticleStateModel {
  articles: Article[];
}

// State
@State<ArticleStateModel>({
  name: 'articles',
  defaults: {
    articles: []
  }
})
export class ArticleState {
  // Selector
  @Selector()
  static getArticles(state: ArticleStateModel): Article[] {
    return state.articles;
  }

  // Action to add an article
  @Action(AddArticle)
  addArticle({ getState, patchState }: StateContext<ArticleStateModel>, { payload }: AddArticle) {
    const state = getState();
    patchState({
      articles: [...state.articles, payload]
    });
  }
}
