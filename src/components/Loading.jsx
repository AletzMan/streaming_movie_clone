import './styles/LoadingStyles.css';

const Loading = () => {
    return (
        <div className='loading'>
            <div className="loading__circle loading__circle--first"></div>
            <div className="loading__circle loading__circle--second"></div>
            <div className="loading__circle loading__circle--third"></div>
        </div>
    );
};

export { Loading };