/**
 * Created by Dan_Shappir on 7/20/15.
 */
(function () {
    'use strict';

    const root = document.getElementById('root');

    class HelloWorld extends React.Component {
        render() {
            return <div>Hello world!</div>;
        }
    }

    React.render(<HelloWorld/>, root);
}());
