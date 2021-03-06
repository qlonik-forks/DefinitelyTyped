// Type definitions for ngCordova file-transfer plugin
// Project: https://github.com/driftyco/ng-cordova
// Definitions by: Phil McCloghry-Laing <https://github.com/pmccloghrylaing>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="angular" />
/// <reference types="cordova" />
/// <reference types="cordova-plugin-file-transfer" />

declare namespace ngCordova {
    export interface IFileTransferService {
        download(url: string, filePath: string, options?: IFileDownloadOptions, trustAllHosts?: boolean): IFileTransferPromise<FileEntry>;
        upload(url: string, filePath: string, options?: IFileUploadOptions, trustAllHosts?: boolean): IFileTransferPromise<FileUploadResult>;
    }

    export interface IFileTransferPromise<T> extends ng.IPromise<T> {
        then<TResult = T, TResult2 = never>(
            successCallback: (promiseValue: T) => ng.IPromise<TResult> | TResult,
            errorCallback?: (error: FileTransferError) => ng.IPromise<TResult2> | TResult2,
            notifyCallback?: (state: any) => any
        ): ng.IPromise<TResult | TResult2>;
        catch<TResult>(onRejected: (error: FileTransferError) => ng.IPromise<TResult> | TResult): ng.IPromise<TResult>;
    }

    export interface IFileDownloadOptions extends FileDownloadOptions {
        encodeURI?: boolean | undefined;
        timeout?: number | undefined;
    }

    export interface IFileUploadOptions extends FileUploadOptions {
        encodeURI?: boolean | undefined;
         timeout?: number | undefined;
    }
}
