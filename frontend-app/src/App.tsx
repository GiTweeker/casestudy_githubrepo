import {
    Fabric
} from "office-ui-fabric-react";
import { mergeStyles } from 'office-ui-fabric-react/lib/Styling';
import * as React from 'react';
import {
    Route,
} from "react-router-dom";
import {routes} from "./routes/routes";




// const personaWithInitials: IPersonaSharedProps = {
//     ...examplePersona,
//     imageInitials: 'MS',
//     text: 'Maor Sharett',
// };

const wrapperClass = mergeStyles({
    padding: 2,
    selectors: {
        '& > *': {
            margin: '10px 0'
        }
    }
});

export class App extends React.Component {


    public render() {
        return <div>


                {routes.map((route, index) => (
                    // You can render a <Route> in as many places
                    // as you want in your app. It will render along
                    // with any other <Route>s that also match the URL.
                    // So, a sidebar or breadcrumbs or anything else
                    // that requires you to render multiple things
                    // in multiple places at the same URL is nothing
                    // more than multiple <Route>s.
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.component}
                    />
                ))}
        </div>;
    }
}

export default App;
