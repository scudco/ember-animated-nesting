import Controller from '@ember/controller';
import { A } from '@ember/array';

export default class Index extends Controller {
  list1 = A(['Item 1', 'Item 2', 'Item 3']);
  list2 = A([
    A(['Item 1', 'Item 2', 'Item 3']),
    A(['Item 4', 'Item 5', 'Item 6']),
  ]);
  list3 = A([
    A([
      A(['Item 1', 'Item 2', 'Item 3']),
    ]),
    A([
      A(['Item 4', 'Item 5', 'Item 6']),
    ])
  ]);
}
