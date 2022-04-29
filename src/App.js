import React, {useState} from 'react';
import moment from "moment";
import "moment/locale/ru";

moment.locale("ru");

function DateTimePretty(Component) {
    function Wrapper(props) {
        const dateA = moment(props.date);
        const dateB = moment(new Date, 'YYYY MM DD HH:mm:ss');
        const date = dateA.from(dateB);
        return <Component date={date}/>
    }
    return Wrapper;
}

function DateTime(props) {
    return (
        <p className="date">{props.date}</p>
    )
}

const OneDateTime = DateTimePretty(DateTime);

function Video(props) {
    
    return (
        <div className="video">
            <iframe src={props.url} allow="autoplay; encrypted-media"></iframe>
            <OneDateTime date={props.date}/>
        </div>
    )
}

function VideoList(props) {
    return props.list.map(item => <Video url={item.url} date={item.date} key={item.id}/>);
}

export default function App() {
    const [list, setList] = useState([
        {
            url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2022-04-28 10:24:00',
            id: "1"
        },
        {
            url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2022-04-03 12:10:00',
            id: "2"
        },
        {
            url: 'https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-02-03 23:16:00',
            id: "3"
        },
        {
            url: 'https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2022-04-28 13:38:00',
            id: "4"
        },
        {
            url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-01-01 16:17:00',
            id: "5"
        },
        {
            url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2017-12-02 05:24:00',
            id: "6"
        },
    ]);

    return (
        <VideoList list={list} />
    );
}