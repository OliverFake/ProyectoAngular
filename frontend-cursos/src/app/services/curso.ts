import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class CursoService {
    private apiUrl = 'http://localhost:3000/cursos';
    constructor(private http: HttpClient) { }
    listarCursos(): Observable<any[]> {
        return this.http.get<any[]>(this.apiUrl);
    }
    registrarCurso(curso: any): Observable<any> {
        return this.http.post<any>(this.apiUrl, curso);
    }
    actualizarCurso(id: number, curso: any): Observable<any> {
        return this.http.put<any>(`${this.apiUrl}/${id}`, curso);
    }
    eliminarCurso(id: number): Observable<any> {
        return this.http.delete<any>(`${this.apiUrl}/${id}`);
    }
}
