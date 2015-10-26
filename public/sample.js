/**
 * Created by Dan_Shappir on 7/20/15.
 */
(function () {
    'use strict';

    const ROOT = document.getElementById('root');

    function HelloWorld() {
        return <div>Hello world!</div>;
    }

    ReactDOM.render(<HelloWorld/>, ROOT);
}());
