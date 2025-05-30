import React from 'react';
import dayjs from 'dayjs';

const InterviewCard = ({interviewId, userId, role, type, techstack, createdAt }: InterviewCardProps) => {
    const feedback = null as Feedback | null;
    const normalizedType = /mix/gi.test(type) ? 'Mixed': type ? 'Mixed' : type;
    const formatettedDate = dayjs(feedback?.createdAt || createdAt || Date.now()).format('MMM D, YYYY');


    return (
        <div className='card-border w-[360px] max-sm:w-full min-h-96'>
        InterviewCard
        </div>
    )
}

export default InterviewCard
