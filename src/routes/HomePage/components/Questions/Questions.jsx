import uuid from "react-uuid";
import { questions } from "../../../../services/dataMovies";
import { Question } from "./Question";

const Questions = () => {
    return (
        <section className="homepage__questions questions">
                <h2 className="questions__title">¿Tienes preguntas? Tenemos las respuestas.</h2>
                
                {questions.map(question => (
                    <Question key={uuid()} options={question}/>
                ))}
            </section>
    );
};

export {Questions};