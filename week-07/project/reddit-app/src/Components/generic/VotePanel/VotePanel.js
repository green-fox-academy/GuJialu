import React from 'react';
import './VotePanel.css';
import ButtonWithIcon from '../ButtonWithIcon/ButtonWithIcon';
import NumDisplayer from '../NumberDisplayer/NumberDisplayer';
import upvoteArrow from './upvoteArrow.svg';
import upvotedArrow from './upvotedArrow.svg';
import downvoteArrow from './downvoteArrow.svg';
import downvotedArrow from './downvotedArrow.svg';

function VotePanel({
  voteNum,
  voteCondition,
  onClickUpvote,
  onClickDownvote
}) {

  const upvoteIcon = voteCondition === 'up' ? upvotedArrow : upvoteArrow;
  const downvoteIcon = voteCondition === 'down' ? downvotedArrow : downvoteArrow;

  return (
    <div className="VotePanel">
      <ButtonWithIcon icon={upvoteIcon} onClick={onClickUpvote} />
      <NumDisplayer num={voteNum} />
      <ButtonWithIcon icon={downvoteIcon} onClick={onClickDownvote}/>
    </div>
  );

}

export default VotePanel;