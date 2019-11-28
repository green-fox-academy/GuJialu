import React from 'react';
import PanelXLight from '../generic/PanelXLight/PanelXLignt';
import H1 from '../generic/H1/H1';
import Url from '../generic/Url/Url';
import TimestampDisplayer from '../generic/TimestampDisplayer/TimestampDisplayer';
import PInfo from '../generic/PInfo/PInfo';
import HorizontalGroup from '../generic/HorizontalGroup/HorizontalGroup';
import VotePanel from '../generic/VotePanel/VotePanel';
import ButtonWithIcon from '../generic/ButtonWithIcon/ButtonWithIcon';

function Post({
  title,
  url,
  timestamp,
  owner,
  voteNum,
  voteCondition,
  onClickUpvote,
  onClickDownvote,
  onClickDelete,
  onClickModify
}) {

  return (
    <PanelXLight>
      <VotePanel
        voteNum={voteNum}
        voteCondition={voteCondition}
        onClickUpvote={onClickUpvote}
        onClickDownvote={onClickDownvote}
      />
      <H1>{title}</H1>
      <Url url={url} />
      <PInfo>Submitted <TimestampDisplayer timestamp={timestamp} /> by {owner} </PInfo>
      <HorizontalGroup>
        <ButtonWithIcon text="delete" onClick={onClickDelete}/>
        <ButtonWithIcon text="modify" onClick={onClickModify}/>
      </HorizontalGroup>
    </PanelXLight>
  );

}

export default Post;