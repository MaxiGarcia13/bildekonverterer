import React, { memo, useMemo } from 'react';
import { Route, Switch } from 'react-router';
import loadable from '@loadable/component';
import PageNotFound from '../PageNotFound';
import Loader from '../../../shared/components/Loader';
import { homePathName, converterPathName, aboutMePathName } from '../../../shared/routes';
import { LoaderWrapper } from './Routes.styles';

const config = {
    fallback: (
        <LoaderWrapper>
            <Loader type='Hearts' height={80} width={80} />
        </LoaderWrapper>
    ),
};

const routes = [
    {
        path: homePathName,
        component: loadable(() => import('../Home'), config),
        exact: true,
    },
    {
        path: converterPathName,
        component: loadable(() => import('../Converter'), config),
        exact: true,
    },
    {
        path: aboutMePathName,
        component: loadable(() => import('../AboutMe'), config),
        exact: true,
    },
];

const RoutesComponent = () => {
    const RoutesMemorized = useMemo(() => {
        return routes.map((route) => (
            <Route key={route.path} path={route.path} exact={route.exact} component={route.component} />
        ));
    }, [routes]);

    return (
        <Switch>
            {RoutesMemorized}
            <Route component={PageNotFound} />
        </Switch>
    );
};

export default memo(RoutesComponent);
