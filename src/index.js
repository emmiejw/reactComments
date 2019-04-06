import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import  ApprovalCard from './ApprovalCard';

const App = ()  => {
    return (
    <div className="ui container comments">
        <ApprovalCard >
            <CommentDetail  
                author="Toby" 
                date="07/02/2019 1:00AM" 
                text="GRRRR I'm going to wake Mum up because I need the loo!!!" 
                avatar={faker.image.avatar()} 
            />
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail 
                author="Emmie" d
                ate="07/06/2018 11:15AM" 
                text="My fist blog post with React.js"
                avatar={faker.image.avatar()} 
            />
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail 
                author="Lewis" 
                date="19/11/2018 03:39PM"
                text="This was the time I was born on this date!!"
                avatar={faker.image.avatar()} 
             />
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail 
                author="Nana" 
                date="29/06/2018 10:30AM"
                text="One more year until I'm 60!!"
                avatar={faker.image.avatar()} 
             />
        </ApprovalCard> 
        <ApprovalCard>
            <CommentDetail 
                author="Sebby" 
                date="01/04/2019 09:30AM"
                text="Today I'm 30!!"
                avatar={faker.image.avatar()} 
             />
        </ApprovalCard>     
        </div>

    );
};

ReactDOM.render(<App />, document.querySelector('#root'));
