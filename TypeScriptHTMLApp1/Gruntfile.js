/// <binding BeforeBuild='less:dev, ts, less, useminPrepare, uglify' AfterBuild='usemin' />
/*
This file in the main entry point for defining grunt tasks and using grunt plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkID=513275&clcid=0x409
*/
module.exports = function (grunt) {

    //grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-ts');
    grunt.loadNpmTasks('grunt-contrib-watch'); //Run predefined tasks whenever watched file patterns are added, changed or deleted
    grunt.loadNpmTasks('grunt-contrib-less'); //Compile LESS files to CSS
    grunt.loadNpmTasks('grunt-contrib-uglify'); //Minify JavaScript files with UglifyJS
    grunt.loadNpmTasks('grunt-contrib-concat'); //Concatenate files
    grunt.loadNpmTasks('grunt-contrib-copy'); //Copy files and folders
    grunt.loadNpmTasks('grunt-filerev-replace'); //Replace references to the images in the compiled js and css files, and the html views
    grunt.loadNpmTasks('grunt-contrib-cssmin'); //Minify CSS
    grunt.loadNpmTasks('grunt-contrib-clean'); //Clean files and folders
    grunt.loadNpmTasks('grunt-filerev');
    grunt.loadNpmTasks('grunt-usemin'); //Replaces references from non-optimized scripts, stylesheets and other assets to their optimized version within a set of HTML files (or any templates/views).
    grunt.loadNpmTasks('grunt-html2js');

    grunt.initConfig({
        useminPrepare: {
            html: 'index.html',
            options: {
                dest: '',
                flow: {
                    html: {
                        steps: {
                            js: ['concat', 'uglify'],
                            css: ['concat', 'cssmin']
                        },
                        post: {
                            js: [{
                                name: 'uglify',
                                createConfig: function (context, block) {
                                    var generated = context.options.generated;
                                    generated.options = {
                                        mangle: false
                                    };
                                }
                            }],
                            app: [{
                                name: 'uglify',
                                createConfig: function (context, block) {
                                    var generated = context.options.generated;
                                    generated.options = {
                                        mangle: false
                                    };
                                }
                            }]
                        }
                    }
                }
            }
        },
        usemin: {
            html: 'index.html',
            options: {
                assetsDirs: ['dist']
            },
        },
        less: {
            dev: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2,
                    sourceMap: true,
                    sourceMapURL: '/Public/Assets/Css/shopFramework.css.map'
                },
                files: {
                    // target.css file: source.less file
                    "Public/Assets/Css/shopFramework.css": "Sources/Assets/Less/main.less"
                }
            },
            prod: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                    "Public/Assets/Css/shopFramework.css": "Sources/Assets/Less/main.less"
                }
            }
        },
        watch: {
            config: {
                files: ['Gruntfile.js'],
                tasks: ['less', 'watch'],
                options: {
                    livereload: true,
                    nospawn: true
                }
            },
            styles: {
                // Which files to watch (all .less files recursively in the less directory)
                files: ['Sources/Assets/Less/**/*.less'],
                tasks: ['less'],
                options: {
                    livereload: true,
                    nospawn: true
                }
            }
        },
        ts: {
            dev: {
                src: ["Sources/Shared/**/*.ts", "Sources/Components/**/*.ts", "app.ts", "config.ts"],
                reference: "reference.ts",
                out: "Public/mms.js",
                //watch: ["Sources/Shared/**/*.ts", "Sources/Components/**/*.ts", "config.ts", "app.ts"]
            },
            prod: {
                src: ["Sources/Shared/**/*.ts", "Sources/Components/**/*.ts", "config.ts", "app.ts"],
                reference: "reference.ts",
                out: "Public/mms.js"
            }
        },
        html2js: {
            options: {
                base: "../MMSClient",
                htmlmin: {
                    collapseBooleanAttributes: true,
                    collapseWhitespace: true,
                    removeAttributeQuotes: true,
                    removeComments: true,
                    removeEmptyAttributes: true,
                    removeRedundantAttributes: true,
                    removeScriptTypeAttributes: true,
                    removeStyleLinkTypeAttributes: true
                }
            },
            main: {
                src: ["Sources/Shared/**/*.html", "Sources/Components/**/*.html"],
                dest: 'Public/templates.js'
            },
        },
        filerev: {
            options: {
                algorithm: 'md5',
                length: 10
            },
            app: {
                src: [
                     'dist/Public/**/*.css'
                ]
            },
            views: {
                src: ['Sources/Components/**/*.html', 'Sources/Shared/**/*.html']
            },
            appjs: {
                src: ['Public/*.js']
            }
        },
        filerev_replace: {
            options: {
                assets_root: ''
            },
            views: {
                src: ['Public/*.js', 'Sources/Components/**/*.html', 'Sources/Shared/**/*.html']
            },
            index: {
                src: ['index.html']
            }
        }
    });

    grunt.registerTask('logrev', 'Do something interesting.', function (arg) {
        console.log(grunt.filerev.summary);
    });

    grunt.registerTask('styles', ['less:dev', 'watch']);
    grunt.registerTask('templates', ["html2js"]);
    grunt.registerTask("default", ["ts:dev"]);
    grunt.registerTask("tsc", ["ts:dev"]);

    grunt.registerTask('build', [
        'less:prod',
        'ts:prod',
        'useminPrepare',
        'uglify',
        'filerev:app',
        'usemin',
    ]);

    grunt.registerTask('viewsrev', [
        'filerev:views', // Rev html files
        'filerev_replace:views', // Replace references in .html views and Public/*.js files
        'filerev:appjs', // Rev js files
        'filerev_replace:index', // Final update of index.html file
        'logrev'
    ]);

};