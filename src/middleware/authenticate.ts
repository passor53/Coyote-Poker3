import { Request, Response, NextFunction } from 'express';
import { validateToken } from '../authenticate/jwt';

/**
 * middleware pour vérifier si l'utilisateur a accès à un terminal spécifique
 *
 * @param allowedAccessTypes  liste des types d'accès autorisés d'un point de terminaison spécifique
 */
export const authorize = (allowedAccessTypes: string[]) => async (req: Request, res: Response, next: NextFunction) => {
    try {
        let jwt = req.headers.authorization;

        // vérifier que la demande a un jeton
        if (!jwt) {
            return res.status(401).json({ message: 'Invalid token ' });
        }

        // supprimer le porteur si vous utilisez le mécanisme d'autorisation de porteur
        if (jwt.toLowerCase().startsWith('bearer')) {
            jwt = jwt.slice('bearer'.length).trim();
        }

        // On vérifie que le token est valide
        const decodedToken = await validateToken(jwt);

        const hasAccessToEndpoint = allowedAccessTypes.some(
            (at) => decodedToken.accessTypes.some((uat) => uat === at)
        );

        // Si pas d'autorisation d'accès à l'API, on sort
        if (!hasAccessToEndpoint) {
            return res.status(401).json({ message: 'Pas assez de privilèges pour accéder au point de terminaison' });
        }

        // Appel à un éventuel autre middleware. C'est géré par Express
        next();
    } catch (error: any) {
        if (error.name === 'TokenExpiredError') {
            res.status(401).json({ message: 'Expired token' });
            return;
        }

        res.status(500).json({ message: 'Failed to authenticate user' });
    }
};