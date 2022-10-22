import { sign, SignOptions, VerifyOptions } from 'jsonwebtoken';
import * as fs from 'fs';
import * as path from 'path';

/**
 * création du token JWT
 */
export function generateToken() {
    // Les informations que l'on souhaite enregistrer dans le token
    const payload = {
        name: 'Laura',
        userId: 123,
        // Les accès à l'API que l'on souhaite ouvrir à ce partenaire
        accessTypes: [
            'getMemberList',
            'showMember',
            'updateMember',
            'addMember',
            'deleteMember'
        ]
    };
    // Lecture du fichier private.key permettant de crypter le JWT
    const privateKey = fs.readFileSync(path.join(__dirname, './../../private.key'));

    const signInOptions: SignOptions = {
        // RS256 utilises une paire de clé public/privée key.
        algorithm: 'RS256',
        // Durée de validité du token
        expiresIn: '10h'
    };

    // generation du token JWT
    // Note: la passphrase devrait être dans le .env
    return sign(payload, { key: privateKey, passphrase: 'toc toc neo' }, signInOptions);
};

interface TokenPayload {
    exp: number;
    accessTypes: string[];
    name: string;
    userId: number;
}

/**
 * Vérifie que le token JWT est valide
 *
 * @param token Le token JWT à valider
 * @return Promise<TokenPayload> Une promesse contenant les éléments utiles (le payload) contenu dans le token
 */
export function validateToken(token: string): Promise<TokenPayload> {
    const publicKey = fs.readFileSync(path.join(__dirname, './../../public.key'));

    const verifyOptions: VerifyOptions = {
        algorithms: ['RS256'],
    };

    return new Promise((resolve, reject) => {
    /*verify(token, { key: privateKey, passphrase: 'desire' }, verifyOptions, (error: any, decoded: TokenPayload) => {
      if (error) return reject(error);

      resolve(decoded);
    })
  */});
}