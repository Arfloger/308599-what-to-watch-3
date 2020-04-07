export default class CommentModel {
  constructor(data) {
    this.id = data[`id`];
    this.user = {
      id: data[`user`][`id`],
      name: data[`user`][`name`]
    };
    this.rating = data[`rating`];
    this.comment = data[`comment`];
    this.date = data[`date`];
  }

  static parseComment(data) {
    return new CommentModel(data);
  }

  static parseComments(data) {
    return data.map(CommentModel.parseComment);
  }
}
