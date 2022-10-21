import { Request, Response } from "express";

export abstract class CrudController {
    public create(req: Request, res: Response): void {
        throw new Error("La méthode de création n'est pas implémentée");
    }

    public read(req: Request, res: Response): void {
        throw new Error("La méthode de lecture n'est pas implémentée");
    }

    public show(req: Request, res: Response): void {
        throw new Error("la methode d'affichage n'est pas implementée");
    }

    public update(req: Request, res: Response): void {
        throw new Error("La méthode de mise à jour n'est pas implémentée");
    }

    public delete(req: Request, res: Response): void {
        throw new Error("La méthode de suppression n'est pas implémentée");
    }
}