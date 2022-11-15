import fs from 'fs';
import path from 'path';

/**
 * 读取指定路径下的所有文件路径并赋值到out中
 * @param parentPath
 * @param out
 */
export function readFiles(parentPath: string, out: string[]) {
    debugger
    try{
        let files = fs.readdirSync(parentPath);
        files.forEach(function(item: string){
            let tempPath = path.join(parentPath,item);
            let stats = fs.statSync(tempPath);
            if(stats.isDirectory()){
                readFiles(tempPath,out);
            }else{
                out.push(tempPath);
            }
        });
    }catch(e){
        console.warn("Path Error:" + parentPath);
        return out;
    }
}
