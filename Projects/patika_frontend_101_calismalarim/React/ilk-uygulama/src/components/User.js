
import PropTypes from "prop-types";

function User({ name, surname, isLoggedIn, friends, address }) {

    if (!isLoggedIn) {
        return <div>asdasdas giriş yapmadınız</div>
    }
    return (
        <>
            <h1>
                {`${name} ${surname} `}
            </h1>

            {address.title} {address.zip}

            {friends.map((element, index) => (

                <div key={element.id}>
                    {index} {element.name}
                </div>
            ))}
        </>
    );
}

User.propTypes = {
    name: PropTypes.string,
    address: PropTypes.shape({
        title: PropTypes.string,
        zip: PropTypes.number
    }),
}



User.defaultProps = {
    name :"isimsiz",
    isLoggedIn: true

}

export default User