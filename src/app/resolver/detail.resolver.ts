import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { Observable, of } from "rxjs";
import { DetailObjectDTO } from "../model/detail.dto";
import { HttpClient } from "@angular/common/http";

export const detailResolver: ResolveFn<DetailObjectDTO> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
): Observable<DetailObjectDTO> => {
  const objectId = route.paramMap.get('id');

  if (!objectId) {

    throw new Error('objectId not found');
  }

  return inject(HttpClient).get<DetailObjectDTO>('https://jsonplaceholder.typicode.com/posts/'+objectId);
}
