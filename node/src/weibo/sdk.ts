const cheerio = require("cheerio");
const superagent = require("superagent");
const weiboURL = "https://s.weibo.com";
const hotSearchURL = weiboURL + "/top/summary?cate=realtimehot";

/**
 * 获取热搜列表数据方法
 */
export function getHotSearchList() : Promise<any[]> {
    return new Promise((resolve, reject) => {
        superagent.get(hotSearchURL, (err: Error, res: any) => {
            if (err) reject("request error");
            const $ = cheerio.load(res.text);
            let hotList: any[] = [];
            $("#pl_top_realtimehot table tbody tr").each(function (index: number) {
                if (index !== 0) {
                    const $td = $(this).children().eq(1);
                    const link = weiboURL + $td.find("a").attr("href");
                    const text = $td.find("a").text();
                    const hotValue = $td.find("span").text();
                    const icon = $td.find("img").attr("src")
                        ? "https:" + $td.find("img").attr("src")
                        : "";
                    hotList.push({
                        index,
                        link,
                        text,
                        hotValue,
                        icon,
                    });
                }
            });
            hotList.length ? resolve(hotList) : reject("errer");
        });
    });
}