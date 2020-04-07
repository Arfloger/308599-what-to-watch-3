import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

export class Reviews extends PureComponent {
  constructor(props) {
    super(props);

    this.isLoad = false;
  }

  componentWillUpdate() {
    this.isLoad = true;
  }

  parseDate(date) {
    return new Date(date).toLocaleString(`en`, {
      year: `numeric`,
      day: `numeric`,
      month: `long`
    });
  }

  sortDateByUp(reviews) {
    return reviews.slice().sort((a, b) => {
      const prevDate = +(new Date(a.date));
      const nextDate = +(new Date(b.date));

      return nextDate - prevDate;
    });
  }

  render() {
    const {comments} = this.props;

    return <>
      {this.isLoad ? <div className="movie-card__reviews-col">
        {this.sortDateByUp(comments).map(({comment, date, id, rating, user}) => <div key={id} className="review">
          <blockquote className="review__quote">
            <p className="review__text">{comment}</p>

            <footer className="review__details">
              <cite className="review__author">{user.name}</cite>
              <time className="review__date" dateTime="2016-12-24">{this.parseDate(date)}</time>
            </footer>
          </blockquote>

          <div className="review__rating">{rating}</div>
        </div>)}
      </div> : null}
    </>;
  }
}

Reviews.propTypes = {
  comments: PropTypes.array.isRequired
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  comments: state.comments
});

export default connect(mapStateToProps)(Reviews);
